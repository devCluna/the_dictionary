import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getWord } from '../../redux/states/dictionary'
import './SearchForm.css'
import dictionaryAPILogo from '../../assets/the-dictionary-API.svg'

const SearchForm = () => {
    const dispatch = useDispatch()

    return (
        <div className='search-form'>
            <img className='logo-img' src={dictionaryAPILogo} />
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

                        <button type='submit'>Search</button>
                        {/* {errors.search && <p className='errors'>{errors.search}</p>} */}
                    </Form>)
                }
            </Formik>
        </div>

    )
}

export default SearchForm
