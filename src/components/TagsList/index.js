// src/components/TagsList.js
import React from 'react'

const TagsList = ({tags, activeTag, onTagClick}) => (
  <label>
    Tags:
    <select value={activeTag} onChange={e => onTagClick(e.target.value)}>
      {tags.map(tag => (
        <option key={tag.optionId} value={tag.optionId}>
          {tag.displayText}
        </option>
      ))}
    </select>
  </label>
)

export default TagsList
