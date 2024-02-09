import Stack from 'react-bootstrap/Stack';

function Header({dateAvecJour}){
    return(
        <Stack direction="horizontal" gap={3} className='px-4 py-2'>
            <div className="p-2 text text-uppercase">citations et anniversaires</div>
            <div className="p-2 ms-auto text text-uppercas">{dateAvecJour}</div>
        </Stack>
    )
}

export default Header;