export const optionsSearch = () => {
    const options = 
        {
            category: [
                {
                    label: "Học phần",
                    value: "module"
                },
                {
                    label: "Thư mục",
                    value: "folder"
                },
                {
                    label: "Lớp học",
                    value: "class"
                },
                {
                    label: "Người dùng",
                    value: "user"
                }
            ],
            fields: [
                {
                    label: "Tên",
                    value: "name"
                },
                {
                    label: "Ngày tạo",
                    value: "created_at"
                }
            ]
        }
    
    return options;
}