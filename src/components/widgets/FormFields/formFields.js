import React from 'react'
import styles from './formFields.css'

const FormField = ({id, formData, change})=>{

    const showError=()=>{
        let errorMsg = null;
        if(formData.validation && !formData.valid){
            errorMsg = (
                <div className={styles.labelError}>
                    {formData.validationMessage}
                </div>
            )
        }
        return errorMsg;
    }

    const renderTemplate= ()=>{

        let formTemplate = null;

        switch(formData.element){
            case('input'):
                formTemplate = (
                    <div>
                        <input 
                            {...formData.config}
                            value={formData.value}
                            onBlur={(event)=>change({event, id, blur:true})}
                            onChange={(event)=>change({event, id, blur:false})}
                        />
                        {showError()}
                    </div>
                )
                break;
            default:
                formTemplate = null;
        }
        return formTemplate;
    }

    return (
        <div>
            { renderTemplate()}
        </div>
    )
}

export default FormField;