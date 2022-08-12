import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {AccountCircle, Lock, Phone, Mail, ArrowDropDown}  from '@mui/icons-material';
import { themes } from './Theme';

function Input({size, value, error, autoFocus, fullWidth, disabled, multiline, rows, startIcon, endIcon, helperText}) {
    const [icon, setIcon] = useState(Phone);
    let CustomTag = icon;
    useEffect(() => {
        switch (startIcon || endIcon) {
            case "profile":
                setIcon(AccountCircle); 
                break;
            case "password":
                setIcon(Lock);
                break;
            case "mobile":
                setIcon(Phone);
                break;
            case "email":
                setIcon(Mail);
                break;
            case "select":
                setIcon(ArrowDropDown);
                break;
            default: 
                return;
        }
    
    }, [startIcon, endIcon]);
  return (
    <Outer helperText={helperText} error={error} >
    <label style={{fontSize: "14px"}}>Label</label>
    <Container size={size} error={error} fullWidth={fullWidth} disabled={disabled} startIcon={startIcon} endIcon={endIcon} helperText={helperText}>
        <InputItem placeholder={`${value ? value : "Placeholder"}`} disabled={disabled} rows={multiline ? (rows) : "1"} autoFocus={autoFocus}  />
        {(startIcon || endIcon) && <CustomTag sx={{height: "18px"}}/>}

    </Container>
    {helperText && <label style={{fontSize: "10px"}}>{helperText}</label>}
    </Outer>
  )
}

export default Input;

const Outer = styled.div`
    color: ${({error}) => (
    (error && themes.colors.error) ||
    (themes.colors.default)
    )};
`;
const Container = styled.section`
    display: flex;
    align-items: center;
    width: ${({fullWidth}) => fullWidth ? "" : "fit-content" };
    flex-direction: ${({startIcon}) => startIcon ? "row-reverse" : "row"};
    padding: ${({size}) => (
    (size === "sm" && themes.sizes.sm) ||
    (size === "md" && themes.sizes.md) ||
    (themes.sizes.md)
  )};
  border: ${({error}) => (
    (error && themes.borders.error) ||
    (themes.borders.default)
  )};
  color: ${({error}) => (
    (error && themes.colors.error) ||
    (themes.colors.default)
  )};
  border-radius: 8px;
  background-color: ${({disabled}) => disabled ? "#F2F2F2" : "white"};
  margin: 2px 0;

  &&:focus-within {
    border: ${({error}) => (error ? themes.borders.errorFocus :  "1px solid #2962FF")} !important; 
  }

  &&:hover {
    border: ${({error}) => (themes.borders.hover)};
  }
  
`;
const InputItem = styled.textarea`
    outline: none;
    border: none;
    background-color: white;
    background-color: ${({disabled}) => disabled ? "#F2F2F2" : "white"};
    resize: none;
    line-height: 1.5;
    
`;