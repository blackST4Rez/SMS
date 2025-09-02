import EditTopicForm from "@/components/EditTopicForm";

const getTopicByID = async (id) => {
    try {
        const baseUrl = process.env.NODE_ENV === 'production' ? 
            process.env.NEXT_PUBLIC_APP_URL || '' : 
            'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/topics/${id}`, {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error('Failed to fetch');
        }
        return await res.json();
    } catch (error) {
        console.log(error);
        return { topic: { title: '', description: '' } };
    }
};

export default async function EditTopic({ params }) {
    const { id } = params;
    const { topic } = await getTopicByID(id);
    const { title, description } = topic;
    return <EditTopicForm id={id} title={title} description={description} />;
}