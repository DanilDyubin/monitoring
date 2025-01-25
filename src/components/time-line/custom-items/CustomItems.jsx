import './customItems.scss';

export const CustomItem = ({ item, itemContext, getItemProps, getResizeProps }) => {
  console.log(`Item ${JSON.stringify(item)}`);
  console.log(`ItemContext ${JSON.stringify(itemContext)}`);
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
  return (
    <div {...getItemProps(item.itemProps)}>
      {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : ''}

      <div className="rct-item">
        <div
          className="color-done"
          style={{
            width: `${itemContext.dimensions.order.group.done}%`,
            background: `${itemContext.dimensions.order.group.color}`,
          }}></div>
        <div className="rct-item-content" style={{ maxHeight: `${itemContext.dimensions.height}` }}>
          {/* {itemContext.title} */}
          {item.title}
        </div>
      </div>

      {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : ''}
    </div>
  );
};

export const CustomItemTotalPage = ({ item, itemContext, getItemProps, getResizeProps }) => {
  console.log(`Item ${JSON.stringify(item)}`);
  console.log(`ItemContext ${JSON.stringify(itemContext)}`);
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
  return (
    <div {...getItemProps(item.itemProps)}>
      {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : ''}

      <div className="rct-item">
        <div
          className="color-done"
          style={{
            width: `${item.plan}%`,
            backgroundColor: `${item.color}`,
          }}></div>
        <div className="rct-item-content" style={{ maxHeight: `${itemContext.dimensions.height}` }}>
          {itemContext.title}
        </div>
      </div>

      {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : ''}
    </div>
  );
};

export const CustomItemSinglePage = ({ item, itemContext, getItemProps, getResizeProps }) => {
  console.log(`Item ${JSON.stringify(item)}`);
  console.log(`ItemContext ${JSON.stringify(itemContext)}`);
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
  return (
    <div {...getItemProps(item.itemProps)}>
      {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : ''}

      <div className="rct-item">
        <div
          className="color-done"
          style={{
            width: `${item.plan}%`,
            backgroundColor: `${item.color}`,
            // width: `${itemContext.dimensions.order.group.done}%`,
            // backgroundColor: `${itemContext.dimensions.order.group.color}`,
          }}></div>
        <div className="rct-item-content" style={{ maxHeight: `${itemContext.dimensions.height}` }}>
          {itemContext.title}
        </div>
      </div>

      {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : ''}
    </div>
  );
};
