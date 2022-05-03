import MainInput from "./UI/input/MainInput"
import MainSelect from "./UI/select/MainSelect"

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MainInput
        value={filter.searchQuery}
        onChange={e => setFilter({...filter, searchQuery: e.target.value})}
        placeholder="Search..."
      />
      <MainSelect
        value={filter.sortBy}
        onChange={selectedSort => setFilter({...filter, sortBy: selectedSort})}
        defaultValue="Sort by"
        options={[
          {name: 'By name', value: 'title'},
          {name: 'By description', value: 'description'}
        ]}
      />
    </div>
  )
}

export default PostFilter