import { ListItem } from "@chakra-ui/react"
import React from "react"
import { useDrag } from "react-dnd"

function Player({ item, type, index, onDropPlayer }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: type,
    item: () => ({ ...item, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()

      if (dropResult && item) {
        onDropPlayer(item)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <ListItem
      p="4"
      borderRadius="md"
      boxShadow="md"
      mb="2"
      textAlign="center"
      ref={dragRef}
      bg={
        isDragging ? (type === "player" ? "Yellow.600" : "teal.400") : "white"
      }
      color={isDragging ? "white" : "black"}
    >
      {item.name}
    </ListItem>
  )
}

export default Player
