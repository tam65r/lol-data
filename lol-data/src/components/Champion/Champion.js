import React, {useEffect, useContext} from "react";
import {urls} from "../../service/Utils"
import AppContext from "../../context/AppContext";
import {fetchChampionDetails, fetchChampionDetailsStarted} from "../../context/Actions";
import Spinner from 'react-bootstrap/Spinner';
import ChampionSkins from './ChampionSkins';
import backgroundImg from '../../assets/green-plain-concrete-textured-background.jpg';
const Champion = ({championId}) => {
    const {championDetails} = urls;
    const {url, request} = championDetails;
    const {state, dispatch} = useContext(AppContext);

    const {champion} = state;
    const {loading, error, data} = champion;



    useEffect(() => {
        dispatch(fetchChampionDetailsStarted());
        console.log(url+championId);
        fetchChampionDetails(url + championId + '.json',request,dispatch)

    }, []);

    if (loading === true) {
        <div style={{color:'black',display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
            <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    } else if (error !== null) {
        <div style={{color:'black'}}>
            <p>{error}</p>
        </div>
    } else {
        const championInfo = data.data[championId]
        const skins = championInfo.skins;
        return (
            <div style={{ color:'snow', backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h1>{championInfo.id}</h1>
                </div>
                <ChampionSkins skins={skins} championId={championId} />
            </div>
        );
    }



}

export default Champion;