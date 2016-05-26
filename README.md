# To make react data flow ever simple ever easy

### how to use ?

```

import dispatcher from 'react-data-flow-framework';


...


return (
    <A state={dispatcher.state(AState)}>
        
        <B state={dispatcher.state(BState)} />
        
        ...
        
        
    </A>
)



B = React.createClass({
    
    render:function(){
    
        return (
            
            <div>
                <button onClick={dispatcher.action('BTN-CLICK-ACTION',{
                    attribute1:'btn',
                    attribute2:'click me',
                    attribute3:12
                })}>click me!</button>
            </div>
        
        )
    
    }
    
    
});

```



