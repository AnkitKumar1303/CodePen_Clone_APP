import React from 'react';
import { useSelector } from 'react-redux'; // Assuming 'user' and 'projects' are stored in Redux state

const Projects = () => {
    const user = useSelector(state => state.user?.user);
    const projects = useSelector(state => state.projects?.projects);

    return (
        <div className='w-full py-6 flex items-center justify-center gap-6 flex-wrap'>
            {projects && projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} user={user} />
            ))}
        </div>
    );
};

const ProjectCard = ({ project, index, user }) => {
    return (
        <div className='w-full cursor-pointer md:w-[450px] h-[375px] bg-secondary rounded-md p-4 flex flex-col items-center justify-center gap-4'>
            <div className='bg-primary w-full h-full rounded-md overflow-hidden' style={{ overflow: "hidden", height: "100%" }}>
                <iframe title="Result" srcDoc={project.output} style={{ border: "none", width: "100%", height: "100%" }} />
                <div className='flex items-center justify-start gap-3 w-full'>
                    {/* image */}
                    <div className='w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
                        {user?.photoURL ? (
                            <img src={user?.photoURL} alt={user?.displayName} referrerPolicy="no-referrer" className='w-full h-full object-cover' />
                        ) : (
                            <p className='text-3xl text-grey font-semibold capitalize'>{user?.email[0]}</p>
                        )}
                    </div>
                    {/* name */}
                </div>
            </div>
        </div>
    );
};

export default Projects;