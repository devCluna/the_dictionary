import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getWord } from '../../redux/states/dictionary'
import {BsSearch as SearchButton} from 'react-icons/bs'
import './SearchForm.css'
import dictionaryAPILogo from '../../assets/the-Dictionary-API-logo.svg'

const SearchForm = () => {
    const dispatch = useDispatch()

    return (
        <div className='search-form'>
            <img onClick={()=>window.open('https://dictionaryapi.dev/', '_blank')} className='logo-img' src={dictionaryAPILogo} />
            <Formik
                initialValues={{
                    search: ""
                }}
                validate={(values) => {

                    let errors = {}

                    if (!values.search) {
                        errors.search = "Please type a search"
                    } else if (/^[0-9]+$/.test(values.search)) {
                        errors.search = "Numbers are not allowed"
                    }

                    return errors
                }}
                onSubmit={(values) => {
                    dispatch(getWord(values.search))
                }}
            >
                {({ errors, values, handleSubmit, handleChange, handleBlur }) => (
                    <Form onSubmit={handleSubmit} className="form">
                        <div className='field-holder'>
                        <Field
                            className=""
                            type="text"
                            id="search"
                            name="search"
                            value={values.search}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='Type your word'
                        />
                        <SearchButton onClick={
                            ()=>dispatch(getWord(values.search))
                        } className='search-button'/>
                        </div>
                        

                        {/* <button type='submit'>Search</button> */}
                        {/* {errors.search && <p className='errors'>{errors.search}</p>} */}
                    </Form>)
                }
            </Formik>
        </div>

    )
}

export default SearchForm
