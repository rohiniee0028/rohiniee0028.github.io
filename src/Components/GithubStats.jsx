import { Heading } from "@chakra-ui/react"

export const GithubStats = () => {
    return (
        <div style={{marginTop:"80px"}}>
            <Heading style={{marginBottom:"50px"}}>My <span style={{color:"tomato"}}>GitHub Stats</span></Heading>
            <br />
            <br />
            <div style={{ width: "80%", margin: "auto"}}>
                <div style={{display:"flex",justifyContent:"space-between",gap:"10px", height:"185px"}}>
                    <img src="https://github-readme-stats.vercel.app/api?username=rohiniee0028&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=dark" alt="rohiniee0028" width="50%" />
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rohiniee0028&layout=compact&exclude_repo=Lybrate-Website-Clone-Version-2.0,Lybrate-Website-Clone,Adidas-Clone&hide=Shell&border_radius=0&theme=dark" alt="rohiniee0028" width="60%"  />
                </div>
                <div style={{width:"40%",margin:"auto",border:"1px solid white", marginTop:"30px"}}>
                    <a href="https://github.com/rohiniee0028/github-readme-streak-stats">
                        <img title="🔥 Get streak stats for your profile at git.io/streak-stats" alt="rohini's streak" src="https://github-readme-streak-stats.herokuapp.com/?user=rohiniee0028&theme=black-ice&hide_border=true&stroke=0000&background=060A0CD0" />
                    </a>
                </div>
            </div>

            <br />
            <div style={{width:"80%",margin:"auto"}}>
                <a href="https://github.com/rohiniee0028/github-readme-activity-graph"><img alt="rohiniee0028's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=rohiniee0028&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" /></a>
            </div>
        </div>
    )
}