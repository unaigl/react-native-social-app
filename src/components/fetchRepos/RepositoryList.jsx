import React from 'react'
import { FlatList, Text } from 'react-native'
// import repositories from './data/repositories.js'
import useRepositories from './hooks/useRepositories.js'
import RepositoryItem from './RepositoryItem.jsx'

const RepositoryList = () => {

  const data = useRepositories();

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
    />
  )
}

export default RepositoryList
