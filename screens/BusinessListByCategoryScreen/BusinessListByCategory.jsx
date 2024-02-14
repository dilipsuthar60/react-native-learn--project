import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GlobalApi from '../../utils/GlobalApi'

export default function BusinessListByCategory() {
  
  const [businessListData, setBusinessListData] = useState([]);
  const getBusinessList = async () => {
    const data = await GlobalApi.getBusinessCategoryList();
    setBusinessListData(data?.businessLists);
  };

  useEffect(() => {
    getBusinessList();
  }, []);
  return (
    <View>
      <Text>BusinessListByCategory</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
})