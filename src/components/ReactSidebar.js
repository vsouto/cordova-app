import React from 'react';
import Sidebar from 'react-sidebar';

class ReactSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen: function(open) {
        this.setState({sidebarOpen: open});
    }

    render: function() {
        var sidebarContent = <b>Sidebar content</b>;

        return (
            <Sidebar sidebar={sidebarContent}
                     open={this.state.sidebarOpen}
                     onSetOpen={this.onSetSidebarOpen}>
                <b>Main content</b>
            </Sidebar>
        );
    }
};

export default App;