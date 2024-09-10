import React, { useState } from 'react'
import '../App.css';

export default function TextUtils(props) {
    const [text,setText] = useState("");
    const [magicText,setMagicText] = useState("");
    const [TextColor,setTextColor] = useState("");
    const [wordCount,setWordCount] = useState(0);
    
        const ConvertToUpperCase = ()=>{
        setMagicText(text.toUpperCase());
        if(wordCount!==0) props.showAlert("Converted to uppercase");
    }

    const ConvertToLowerCase = ()=>{
        setMagicText(text.toLowerCase());
        if(wordCount!==0) props.showAlert("Converted to lowercase");
    }

    const getColorCode = ()=>{
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const UpdateTextColor = ()=>{
        setTextColor(getColorCode());
        if(wordCount!==0) props.showAlert("Updated text color");
    }

    const ResetText = ()=>{
        setWordCount(0);
        setText("");
        setMagicText(""); 
        if(wordCount!==0) props.showAlert("Text cleared from both text boxes");       
    }

    const HandleTextArea1 = (event)=>{
        setText(event.target.value);
        let noOfWords = event.target.value.replace(/\s+/g, ' ').trim().split(' ');
        if(noOfWords[noOfWords.length-1] === ''){
            setWordCount(noOfWords.length-1)
        }
        else{
            setWordCount(noOfWords.length)
        }
    }

    const HandleTextArea2 = (event)=>{
        setMagicText("")
    }

    const RemoveExcessSpaces = ()=>{
        setMagicText(text.replace(/\s+/g,' ').trim())
        if(wordCount!==0) props.showAlert("Excess spaces removed");
    }

    const buttons = {
        display: 'flex',
        flexWrap:'wrap',
        gap : '0px 2%'
    }

    const CopyText = ()=>{
        if(magicText.length===0) return;
        // document.getElementById('ModifiedTextArea').select();
        // document.execCommand('copy');
        
        // props.showAlert("Text copied to clipboard");
        navigator.clipboard.writeText(magicText)
        .then(() => {
            props.showAlert("Text copied to clipboard");
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    const CopySelectedText = ()=>{
        if(window.getSelection().toString().length!==0){
            document.execCommand('copy');
            props.showAlert("Text copied to clipboard");
        }
    }

    const width = '300px';

  return (
    <>
        <div className="mb-3 my-3 container">
            <h2>Welcome to Text Utilities Application</h2>
            <div className="magicBoxes">
                <textarea 
                    className="form-control dark-theme" onChange={HandleTextArea1} 
                    id="TextArea" rows="13" placeholder='Enter some text here' 
                    value={text} style={{resize:'none', marginRight:'5px'}} >
                </textarea>
                <textarea 
                    className="form-control dark-theme" onChange={HandleTextArea2}
                    id="ModifiedTextArea" rows="13" placeholder='See the magic here' 
                    value={magicText} style={{color : TextColor, resize:'none', marginLeft:'5px'}}>
                </textarea>
            </div>
            <p className='my-3'>{wordCount} {wordCount===1 ? 'word' : 'words'} and {text.length} {text.length===1 ? 'character' : 'characters'}</p>

            <div className="buttons" style={buttons}>
                <button type="button" className="btn btn-outline-secondary my-3" onClick={ConvertToUpperCase} style={{width:width}}>Convert to uppercase</button>
                <button type="button" className="btn btn-outline-secondary my-3" onClick={ConvertToLowerCase} style={{width:width}}>Convert to lowercase</button>
                <button type="button" className="btn btn-outline-secondary my-3" onClick={UpdateTextColor} style={{width:width}}>Update text color</button>
                <button type="button" className="btn btn-outline-secondary my-3" onClick={ResetText} style={{width:width}}>Reset Text</button>
                <button type="button" className="btn btn-outline-secondary my-3" onClick={RemoveExcessSpaces} style={{width:width}}>Remove Excess spaces</button>
                <button type="button" className="btn btn-outline-secondary my-3" onClick={CopyText} style={{width:width}}>Copy text</button>
                <button type="button" className="btn btn-outline-secondary my-3" onClick={CopySelectedText} style={{width:width}}>Copy selected text</button>                
            </div>
        </div>
    </>
  )
}



/*
    // let contentBeforeDeletion = '';
    // let contentAfterDeletion = '';
    
    /*const input = () => {
        if (textarea.dataset.deletionDetected) {
            let deletedContent = '';
            contentAfterDeletion = textarea.value;
            const diff = contentBeforeDeletion.length - contentAfterDeletion.length;
            deletedContent = contentBeforeDeletion.substring(textarea.selectionStart,textarea.selectionStart+diff);
            console.log(deletedContent)     
            delete textarea.dataset.deletionDetected;
        }
    };
    
        // if (event.inputType==='beforeinput' && (event.inputType === 'deleteContentBackward' || event.inputType === 'deleteContentForward')) {
        //     contentBeforeDeletion = newText;
        //     console.log('deletion detected');
        //     let deletedContent = '';
        //     contentAfterDeletion = event.target.value;
        //     const diff = contentBeforeDeletion.length - contentAfterDeletion.length;
        //     deletedContent = contentBeforeDeletion.substring(textarea.selectionStart,textarea.selectionStart+diff);
        //     console.log(deletedContent)
        //     return; 
        // }



        // const [vowelCount,setVowelCount] = useState(0);
        <p>Number of vowels = {vowelCount}</p>

        const newText = event.target.value;
        // contentBeforeDeletion = newText;

        
        if (
            event.inputType === 'beforeinput' &&
            (event.inputType === 'deleteContentBackward' ||
              event.inputType === 'deleteContentForward')
          ) {
            console.log("deletion happened");
          }
        if("aeiouAEIOU".includes(newText[newText.length-1])){
            setVowelCount(vowelCount+1);
        }
*/