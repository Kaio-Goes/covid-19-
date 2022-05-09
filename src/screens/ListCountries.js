import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
 

const ListCountries = ( {navigation, route}) => {

    const url = 'https://api.covid19api.com/summary';
    const [report , setReport] = useState({});
    const countries  = Array.from(report);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(countries);
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState()

    useEffect(() => {
        const result = countries.filter((country) =>
          country.Country.toLowerCase().includes(search.toLowerCase()),
        );
        setReport(result);
      }, [search]);
      
    useEffect(() =>{
        const getData = async () => {
              // setIsLoading(true)
              // try{
              //     const result = await fetch(url);
              //     const response = await result.json()
              //     setData(response)
              //     setIsLoading(false)
              // }catch(e) {
              //     console.log(e)
              // }
            try {
                const response = await axios.get(url);
                const data = response.data.Countries;
                setReport(data)
                console.log(data)
            }catch (error) {
                alert(error.message);
            }
          };
      
        getData()
      }, [])

    // const callReport = () => navigation.navigate('Country', report )
        return(
        <View style={styles.container}>
            <Text style={styles.textDash}>LIST OF COUNTRIES</Text>
            <SearchBar lightTheme  placeholder="Name of the country..." onChangeText={setSearch} value={search} />
            <FlatList style={styles.flatList}
                data={report}
                renderItem={({item, index }) =>(
                    <View>
                        <ListItem
                        key={index} bottomDivider>
                        <ListItem.Content>
                                <ListItem.Title>{item.Country}</ListItem.Title>
                                <ListItem.Subtitle>{`Deaths: ${item.TotalDeaths}`}</ListItem.Subtitle>
                                <ListItem.Subtitle>{`Total Confirmed: ${item.TotalConfirmed}`}</ListItem.Subtitle>
                                <ListItem.Subtitle>{`New Confirmed: ${item.NewConfirmed}`}</ListItem.Subtitle>
                                <ListItem.Subtitle>{`New Deaths: ${item.NewDeaths}`}</ListItem.Subtitle>
    
                            </ListItem.Content>
                        </ListItem>
                        
                    </View>
                )}
            ></FlatList>
        </View>
    )
}

export default ListCountries;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191A1A',
    },
    textDash: {
        color: "#FFF",
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 50,
        fontWeight: 'bold'
    },
})