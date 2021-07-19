import { useForm } from "react-hook-form";

const AddFormProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const fakeValue = {
      id: Math.random().toString(36).substring(7),
      ...data,
    };
    props.onAdd(fakeValue);
  };
  //   const onHandleSubmit = (e) => {
  //     e.preventDefault();
  //     const fakeValue = {
  //         id: Math.random().toString(36).substring(7),
  //         ...data
  //     };
  //     props.onAdd(fakeValue);
  //   };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Thêm sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            // name="name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            type="number"
            className="form-control"
            // name="price"
            {...register("price", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tình trạng</label>
          <select
            className="form-control"
            // name="status"
            {...register("status", { required: true })}
          >
            <option value="false">Hết hàng</option>
            <option value="true">Còn hàng</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};
export default AddFormProduct;