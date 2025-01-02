import { useState } from "react";

interface SearchFormProps {
    initialText?: string;
    buttonText: string; // Required button text
}

const SearchForm: React.FC<SearchFormProps> = ({ initialText = 'http://tuconsultoraseo.com', buttonText }) => {    
    const [text, setText] = useState(initialText);    
        
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Searching for: ${text}`);
    };

    return (
        <form onSubmit={handleSubmit} 
              style={{
                  padding: '5px',
                  margin: '5px'
              }}>
            <input 
                type="search"
                maxLength={255} 
                name="URL" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                id='search-box' 
                style={{
                    padding: '1px 3px 3px 3px',
                    display: 'inline',
                    width: '100%',
                    marginBottom: '10px'
                }}/>
            <input 
                type="submit" 
                id='search-btn' 
                name="comprobar" 
                value={buttonText} 
                style={{
                    border: 'solid 1px #806666',
                    padding: '3px 10px',
                    margin: '0 10px 0 0',
                    display: 'block'
                }}/>
        </form>
    );
};

export { SearchForm };