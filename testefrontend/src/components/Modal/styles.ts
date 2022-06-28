export const modalStyles = {
    overlay: {
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        opacity: .9
    },
    content: {
        backgroundColor: '#F7F8F8',

        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center'
    }
}

export const closeIcon = {
    position: 'absolute' as 'absolute',
    top: 5,
    right: 5,
    cursor: 'pointer'
}