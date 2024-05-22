// src/TreeView.js
import React from 'react';
import TreeNode from './TreeNode';
import { usePermisoStore } from '@/app/stores';


const TreeView = () => {
  const treeData = usePermisoStore((state) => state.treeData);

  return (
    <div>
      {treeData.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default TreeView;