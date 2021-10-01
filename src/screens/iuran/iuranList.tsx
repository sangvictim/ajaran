import React from 'react'
import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }: any) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const iuranList = () => {

    const getData = () => {
        return true
    }

    const renderItem = ({ item }: any) => (
        <Item title={item.title} />
    );
    return (
        <View>
            <Text>ini halaman kegitan liat</Text>
            <FlatList
                onRefresh={() => getData()}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default iuranList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});