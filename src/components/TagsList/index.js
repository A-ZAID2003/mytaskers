import React from 'react'

const TagsList = ({tags, activeTag, onTagClick}) => (
  <label>
    <h1>Tags</h1>
    <ul>
      <li>
        <select value={activeTag} onChange={e => onTagClick(e.target.value)}>
          {tags.map(tag => (
            <option key={tag.optionId} value={tag.optionId}>
              {tag.displayText}
            </option>
          ))}
        </select>
      </li>
    </ul>
  </label>
)

export default TagsList
