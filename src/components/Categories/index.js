import React from "react";
import { FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
    
    return(
        
        <FlatList 
            horizontal={true}
            style={{ marginRight : -32}}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({item}) => {

                const selected = selectedCategory == item

                return(
                    <TouchableOpacity onPress={() => onCategoryPress(item)}>
                        <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{item}</Text>
                    </TouchableOpacity>

                );
            
            }}
        />
    );
}

export default React.memo(Categories);