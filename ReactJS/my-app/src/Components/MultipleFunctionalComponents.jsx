function ParentComponent() {
    return <h2>Hello From Parent Component</h2>
}
function ChildComponent() {
    return <h2>Hello from Child Nested Component </h2>
}

export default function MainFunction() {
    return <>
        <h2>
            <ParentComponent/>
        <ChildComponent />
        </h2>
        
        </>
}

// export {
//     ParentComponent,ChildComponent
// }