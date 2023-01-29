import React from 'react'

const FilterBTN = ({name, index, items}) => {
  return (
    <div>
      <option className='' type='' name={name} id={`${name}-${index}`}>{items}</option>
    </div>
  )
}

export default FilterBTN