import "./category.css"
export function Category({text, id, checked = false}) {
    return(
        <label className="checkbox">
            <input type="checkbox" id={id} name={id}  onChange={e => {}}/>
            <span className="checkmark"></span>
            {text}
        </label>
    )
}