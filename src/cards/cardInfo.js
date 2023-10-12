//holds the information on each injection technique and it's associated 
//fetch route. Extra information can be added and the program will 
//dynamically handle the new method
export const cardInfo = () => {
    return [
        {
            description: "UNION tricks the database by joining the unwanted SQL statement with the intended SQL statement ' UNION injected_sql_statement'",
            title: 'Union Attacks',
            fetchSafeRoute: '',
            fetchUnsafeRoute: ''
        },
        {
            description: "By using OR and 1=1, the attacker can create a second condition, which will always return true.",
            title: '1=1 Attacks',
            fetchSafeRoute: '',
            fetchUnsafeRoute: ''
        },
        {
            description: "Forces an error, sometimes a type error and uses this to somehow show sensitive data.",
            title: 'Error Attacks',
            fetchSafeRoute: '',
            fetchUnsafeRoute: ''
        }
    ]
}