import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import data from '../data'

const PickInterest = () => {
    const [interests, setInterest] = useState([...data]);

    const selectInterest = (id) => {
        const currentItemIndex = interests.findIndex(interest => interest.id === id);
        const updateInterest = Object.assign({}, interests[currentItemIndex]);
        if (updateInterest.isSelected) {
            updateInterest.isSelected = false;
        } else {
            updateInterest.isSelected = true;
        }
        const newInterests = interests.slice();
        newInterests[currentItemIndex] = updateInterest;
        setInterest(newInterests);
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 25,
                paddingVertical: '20%'
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '700',
                    letterSpacing: 0
                }}
            >Pick Your Interests.</Text>

            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginVertical: 50,
                }}
            >
                {
                    interests.map((item, index) => {
                        const image = item.image
                        return (
                            <TouchableOpacity key={index} onPress={() => selectInterest(item.id)} >
                                <View
                                    style={{
                                        borderRadius: 20,
                                        padding: 9,
                                        backgroundColor: item.isSelected ? "#0e8dee" : "#f1f1f1",
                                        flexDirection: 'row',
                                        marginVertical: 10,
                                        marginRight: 10
                                    }}
                                >
                                    <Image
                                        source={image}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginRight: 5
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: item.isSelected ? '#fff' : '#000',
                                            letterSpacing: 1,
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <TouchableOpacity
                style={{
                    width: '100%',
                    height: 40,
                    backgroundColor: '#000',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '600',
                        letterSpacing: 2
                    }}
                >Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PickInterest