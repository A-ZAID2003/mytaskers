// const TagsList = ({tags, activeTag, onTagClick}) => (
//   <label htmlFor="tagSelect">
//     <h1>Tags</h1>
//     <ul>
//       <li>
//         <select
//           id="tagSelect"
//           value={activeTag}
//           onChange={e => onTagClick(e.target.value)}
//         >
//           {tags.map(tag => (
//             <option key={tag.optionId} value={tag.optionId}>
//               {tag.displayText}
//             </option>
//           ))}
//         </select>
//       </li>
//     </ul>
//   </label>
// )

// export default TagsList

// TagsList.js

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
  </label>
)

export default TagsList
