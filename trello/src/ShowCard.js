import React from "react";
// import PropTypes from "prop-types";

import "./css/ShowCard.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class ShowCard extends React.Component {
  //   return (
  //     <div className="showCard">
  //       <ul>
  //         {props.cardList.map(function(item) {
  //           return (
  //             <li key={item.id} id={item.id}>
  //               <span>{item.title}</span>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );

  render() {
    return (
      <div>
        <div id="drag" className="showCard"></div>
        <DragDropContext
          onDragEnd={result => {
            console.log(result);
            const { source, destination } = result;
            result = {
              draggableId: 1,
              type: "TYPE",
              reson: "DROP",
              source: {
                droppableId: 1,
                index: 0
              },
              destination: {
                droppableId: 1,
                index: 1
              }
            };
            if (!destination) {
              return;
            }

            let arr = this.props.cardList;
            console.log(this.props.cardList);
            const [remove] = arr.splice(source.index, 1);
            arr.splice(destination.index, 0, remove);
            this.props.handleSetCard(arr, this.props.listId);
          }}
        >
          <Droppable droppableId="drag">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {this.props.cardList.map((t, i) => (
                  <Draggable draggableId={t.id} index={i}>
                    {p => (
                      <div
                        ref={p.innerRef}
                        {...p.draggableProps}
                        {...p.dragHandleProps}
                        key={t.id}
                      >
                        <div className="dragItem">{t.title}</div>
                        <div className="placeHolder">
                          {provided.placeholder}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

// ShowCard.propTypes = {
//   list: PropTypes.array,
//   handleCheck: PropTypes.func,
//   handleDelete: PropTypes.func,
//   handleEdit: PropTypes.func,
//   editValue: PropTypes.string,
//   handleSave: PropTypes.func,
//   handleCancel: PropTypes.func,
//   handleChange1: PropTypes.func
// };

export default ShowCard;
