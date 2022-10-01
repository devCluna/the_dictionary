import React from 'react'
import { useSelector} from 'react-redux'
import uniqid from 'uniqid'
import './SearchInfo.css'

const SearchInfo = () => {
    //Format Info
    const  {wordSearch:{word},
            wordSearch:{phonetic}, 
            wordSearch:{phonetics},
            wordSearch:{meanings},  
            loading
        } = useSelector(state => state.dictionary)

    return (
        <div className='search-info'>
            {word && <p>word: <span>{word}</span></p>}
            {phonetic && <p>phonetic: <span>{phonetic}</span></p>}
            
            {/* {phonetics?.map(phonetic => (
                
                <audio key={uniqid()} src={phonetic.audio} controls/>
            ))} */}

            {meanings?.map(meaning => (
                <div key={uniqid()}>
                    <p>Parth of Speech: <span>{meaning.partOfSpeech}</span></p>
                    <p>Definitions:</p>
                    {meaning?.definitions.map(mean =>(
                        <p key={uniqid()}>def {meaning.definitions.indexOf(mean)+1}: <span>{mean.definition}</span></p>
                    ))}
                </div>
            ))}
        </div>
    )
  }


export default SearchInfo
