type Props = {
    variant: 'green' | 'yellow' | 'red'
}

const Light = ( variant: Props) => {
    return (
        <div 
            style={{
                padding: 20, 
                background: 'green', 
                borderRadius: '50%', 
                width: 50, 
                height: 50,
            }}
        ></div>
    )
}

export default Light