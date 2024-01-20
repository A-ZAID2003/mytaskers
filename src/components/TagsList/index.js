const TagsList = ({tags, activeTag, onTagClick}) => (
  <label htmlFor="tagSelect">
    <h1>Tags</h1>
    <ul>
      <li>
        <select
          id="tagSelect"
          value={activeTag}
          onChange={e => onTagClick(e.target.value)}
        >
          {tags.map(tag => (
            <option key={tag.optionId} value={tag.optionId}>
              {tag.displayText}
            </option>
          ))}
        </select>
      </li>
    </ul>
    <div>
      {tags.map(tag => (
        <button
          key={tag.optionId}
          type="button" // Add type attribute here
          onClick={() => onTagClick(tag.optionId)}
          className={activeTag === tag.optionId ? 'active' : ''}
        >
          {tag.displayText}
        </button>
      ))}
    </div>
  </label>
)

export default TagsList
