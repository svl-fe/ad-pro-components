import React, { ReactNode, useCallback, useMemo } from 'react';
import type { FC } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useControlledState } from '@svl-ad/hooks';
import './style/index.less';

const CheckboxGroup = Checkbox.Group;
interface CustomNodeItem extends TreeNodeItem {
  /** 自定义节点 */
  customNode?: ReactNode;
}
interface TreeNodeItem {
  key: string;
  title: string;
}

interface TreeNode extends TreeNodeItem {
  children?: CustomNodeItem[];
}

interface CheckboxTree {
  /** 是否展示全部按钮选项 */
  isShowAll?: boolean;
  /** 当前选中的条目 */
  value?: Record<string, CheckboxValueType[]>;
  /** 默认选中的条目 */
  defaultValue?: Record<string, CheckboxValueType[]>;
  /** 选中树节点调用此函数 */
  onChange?: (value: Record<string, CheckboxValueType[]>) => void;
  /** treeNodes 数据 */
  treeData: TreeNode[];
}

const CheckboxTree: FC<CheckboxTree> = (props) => {
  const { isShowAll = true, treeData = [], onChange, defaultValue = {}, value } = props;

  const [checkedList, setCheckedList] = useControlledState<Record<string, CheckboxValueType[]>>(
    defaultValue,
    { value, onChange },
  );

  const getAllCheckStatus = useCallback(() => {
    let checked = true;

    treeData.forEach((treeItem) => {
      if (treeItem.children) {
        if (!checkedList[treeItem.key]) {
          return (checked = false);
        }

        if (treeItem.children.length !== checkedList[treeItem.key].length) {
          return (checked = false);
        }
      }
    });
    return checked;
  }, [treeData, checkedList]);

  const onCheckItem = ({ checked, data }: { checked: boolean; data: TreeNode }) => {
    if (checked) {
      setCheckedList({
        ...checkedList,
        [`${data.key}`]: data.children?.map((item) => item.key) || [],
      });
    } else {
      const new_data = { ...checkedList };
      if (new_data.hasOwnProperty(`${data.key}`)) {
        delete new_data[`${data.key}`];
      }
      setCheckedList(new_data);
    }
  };

  const onCheckSubItem = ({ key, list }: { key: string; list: CheckboxValueType[] }) => {
    const new_data = { ...checkedList, [`${key}`]: list };
    if (list.length === 0) {
      delete new_data[key];
    }
    setCheckedList(new_data);
  };

  const onCheckAll = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      const checkedData = treeData.reduce<Record<string, CheckboxValueType[]>>((prev, current) => {
        prev[current.key] = current.children?.map((item) => item.key) || [];

        return prev;
      }, {});

      setCheckedList(checkedData);
    } else {
      setCheckedList({});
    }
  };

  /**
   * 获取“全部”按钮的Indeterminate状态(只负责样式控制)
   */
  const getAllIndeterminate = useMemo(() => {
    let checked = false;

    if (checkedList && Object.keys(checkedList).length) {
      treeData.forEach((treeItem) => {
        if (treeItem.children) {
          if (!checkedList[treeItem.key]) {
            return (checked = true);
          }

          if (treeItem.children.length !== checkedList[treeItem.key].length) {
            return (checked = true);
          }
        }
      });
    }

    return checked;
  }, [treeData, checkedList]);

  /**
   * 获取 Checkbox Group 的indeterminate 状态(只负责样式控制)
   */
  const getGroupIndeterminate = useCallback(
    (item: TreeNode) => {
      if (!checkedList[item.key]) return false;
      if (!item.children) return true;

      return !!checkedList[item.key].length && checkedList[item.key].length < item.children.length;
    },
    [checkedList],
  );

  const renderChildren = (data: TreeNode[]) => {
    return (
      <div>
        {data.map((item: CustomNodeItem) => {
          if (item.customNode) {
            return item.customNode;
          }
          return (
            <Checkbox
              key={item.key}
              value={item.key}
              className="svl-pro-checkbox-tree-sub-item-opt"
            >
              {item.title}
            </Checkbox>
          );
        })}
      </div>
    );
  };

  return (
    <div className={'svl-pro-checkbox-tree'}>
      {isShowAll && (
        <div className={'svl-pro-checkbox-tree-all'}>
          <Checkbox
            indeterminate={getAllIndeterminate}
            onChange={onCheckAll}
            checked={getAllCheckStatus()}
          >
            全部
          </Checkbox>
        </div>
      )}

      {treeData.map((item) => {
        return (
          <div key={`tree-item-${item.key}`}>
            <div className="svl-pro-checkbox-tree-item">
              <Checkbox
                indeterminate={getGroupIndeterminate(item)}
                checked={checkedList[item.key]?.length === item.children?.length}
                onChange={(e) => onCheckItem({ checked: e.target.checked, data: item })}
              >
                {item.title}
              </Checkbox>
            </div>

            {item.children ? (
              <div className="svl-pro-checkbox-tree-sub-item">
                <CheckboxGroup
                  value={checkedList[item.key] || []}
                  onChange={(values) => onCheckSubItem({ key: item.key, list: values })}
                >
                  {renderChildren(item.children)}
                </CheckboxGroup>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxTree;
