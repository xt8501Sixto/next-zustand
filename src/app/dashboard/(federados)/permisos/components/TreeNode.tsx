import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { usePermisoStore } from '@/app/stores';
import './styles.css'


const TreeNode = ({ node }: { node: any }) => {
  const expandedNodes = usePermisoStore((state) => state.expandedNodes);
  const toggleNode = usePermisoStore((state) => state.toggleNode);
  const isOpen = expandedNodes[node.id];
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className='tree-spacingLeft tree-spacingBottom'>
      <div className='tree-spacingBottom' onClick={() => toggleNode(node.id)}>
        {hasChildren && (
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
        )}{' '}
        {node.name}
      </div>
      {isOpen && hasChildren && (
        <div className='tree-spacingBottom'>
          {node.children.map((child: any) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;