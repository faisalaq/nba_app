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
            case('select'):
                formTemplate = (
                    <select
                        value={formData.value}
                        name={formData.config.name}
                        onBlur={(event)=>change({event, id, blur:true})}
                        onChange= {(event)=>change({event, id, blur:false})}
                    >
                        {formData.config.options.map((item, i)=>(
                            <option key={i} value={item.id}>{item.name}</option>
                        ))}
                    </select>
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