import React from 'react';
import { Text, View, StyleSheet, FlatList, SectionList, TouchableOpacity } from 'react-native';


// Exercise 1
// const datasource = [
//     {key: 'a'},
//     {key: 'b'},
//     {key: 'c'},
//     {key: 'd'},
//     {key: 'e'},
//     {key: 'f'},
//     {key: 'g'},
//     {key: 'h'},
//     {key: 'i'},
//     {key: 'j'},
//     {key: 'k'},
//     {key: 'l'},
//     {key: 'm'},
//     {key: 'n'},
//     {key: 'o'},
//     {key: 'p'},
//     {key: 'q'},
//     {key: 'r'},
//     {key: 's'},
//     {key: 't'},
//     {key: 'u'},
//     {key: 'v'},
//     {key: 'w'},
//     {key: 'x'},
//     {key: 'y'},
//     {key: 'z'},
// ];
//
// const styles = StyleSheet.create({
//     opacityStyle: {
//         borderWidth: 1,
//     },
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: 'left',
//     }
// });
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const App = () => {
//   return (
//       <View>
//         <FlatList data={datasource} renderItem={renderItem} />
//       </View>
//   );
// };
//
// export default App;



// Exercise 2
const datasource = [
    {data:[
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'},
        ],
        title:"Vowels", bgcolor: 'skyblue'},
    {data:[
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
            {key: 't'},
            {key: 'v'},
            {key: 'w'},
            {key: 'x'},
            {key: 'y'},
            {key: 'z'},
        ],
        title:"Consonants", bgcolor: 'khaki'},
];

const styles = StyleSheet.create({
    headertext: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    }
});

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View>
          <SectionList sections={datasource} renderItem={renderItem}
                       renderSectionHeader={({section:{title, bgcolor}})=>(
                           <Text style={[styles.headertext,{backgroundColor:bgcolor}]}>{title}</Text>
                       )}/>
      </View>
  );
};

export default App;


