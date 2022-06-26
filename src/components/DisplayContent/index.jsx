import './styles.scss'

export function DisplayContent({ title, reactComponent }) {
    return (
        <div className="display-content">
            <h1>{title}</h1>
            <hr />
            <div className="content">
                {reactComponent}
            </div>
        </div>
    );
}