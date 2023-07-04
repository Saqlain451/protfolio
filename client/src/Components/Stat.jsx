import React from 'react';

const Stat = () => {
    return (
        <>
            {/*<div className="d-flex mt-3">*/}
            {/*    <span className="pt-1 pb-1 pl-3 pr-3 bg-secondery br-0-5 text-green ls-1">📊 GITHUB STATS:</span>*/}
            {/*</div>*/}

            <div className="grid-3 g-1 mt-2 grid-md-2 grid-sm-1 stat">
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Saqlain451&theme=transparent&show_icons=true&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
                    alt="github stat" className={"img-fluid"}/>
                <img
                    src="https://github-readme-stats.vercel.app/api?username=Saqlain451&theme=transparent&show_icons=true&hide_border=false&include_all_commits=false&count_private=false"
                    alt="github stat" className={"img-fluid"}/>
                <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=Saqlain451&theme=transparent&hide_border=false"
                    alt="github stat" className={"img-fluid"}/>
            </div>

        </>
    )

}

export default Stat;