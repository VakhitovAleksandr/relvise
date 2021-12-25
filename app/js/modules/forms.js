function formProcessing() {

    function serialForm(formNode) {
        const { elements } = formNode;
        const data =
            Array.from(elements).filter((item) => !!item.name).map((element) => {
                const { name, value } = element;

                return { name, value };
            });

        console.log(data);
    }

    function formHandler(event) {
        event.preventDefault();
        serialForm(form);
    }

    const form = document.querySelector('.form-fullback');
    form.addEventListener('submit', formHandler);
}

export default formProcessing();
