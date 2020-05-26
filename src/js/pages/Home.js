import React, { useState, useEffect } from 'react'
import api from '../utils/api'
import styled from 'styled-components'
import ThemeBox from './ThemeBox'

const Home = (props) => {
	const [themes, setThemes] = useState([])
	const dispatch = useDispatch()
	const moduleIsLoading = useSelector(state => state.tree.modules.isLoading)
	const modulesCollection = useSelector(state => state.tree.modules.collection)

	useEffect(() => {
		api.get('/skills/themes')
			.then(response => setThemes(response.data.payload.themes))
	}, [])

	useEffect(() => {
		dispatch(fetchModules())
		console.log(themes)
	}, [themes])

	if (moduleIsLoading) return <span>Modules are loading</span>

    return (
		<section>
			<h1>Home</h1>
			{
				modulesCollection && modulesCollection.map(item => <span key={item.id}>{item.name}</span>)
			}
			<button onClick={() => dispatch({ type: 'CLEAR_MODULES' })}> Clear modules </button>
		</section>
    )
}

const Body = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	padding: 85px 0 25px 0;
	box-sizing: border-box;
`

export default Home;
