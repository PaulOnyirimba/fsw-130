import React from 'react';
import PageContextProvider from './PageContextProvider';
import Header from './Header';
function App() {
    return (
        <div className="App">
            <PageContextProvider>
                <Header />
            </PageContextProvider>
        </div>
    );
}
export default App;