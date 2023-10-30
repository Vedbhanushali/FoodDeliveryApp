import { render } from '@testing-library/react'
import Header from '../Header'


test("logo should load on rendering header", () => {
    //load header
    //this render is small container / browser where we can load our component for testing
    const header = render(<Header />)
    //check if logo is loaded

})