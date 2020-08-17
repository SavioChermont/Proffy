import React, {useState, useEffect} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation} from '@react-navigation/native';  

import styles from './styles';

import LandingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import api from '../../services/api';

function Landing(){
    const navigation = useNavigation();
    const [totalConnections, setTotalConnections ] = useState(0);

    useEffect(() => {
        api.get('connection').then( response => {
            const {total} = response.data;
            setTotalConnections(total);
        })
    }, []);

    function handleNavigateToGiveClassesPage(){
        navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudyPages(){
        navigation.navigate('Study')
    }

    return(
        <View style={styles.container}>
            <Image source={LandingImg} style={styles.banner}/>

            <Text style={styles.title}> Seja Bem-vindo, {'\n'} <Text style={styles.titleBold}> O que deseja fazer? </Text> </Text>

            <View style={styles.buttonsContainer}> 
                <TouchableOpacity onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClasses} />
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalConnections}> Total de {totalConnections} de Conexões já realizadas {' '}  
            <Image source={heartIcon} />
            </Text>
        </View>
        
    );
}

export default Landing;