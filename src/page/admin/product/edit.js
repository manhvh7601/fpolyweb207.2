import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { get } from "../../../api/productAPI";

const EditFormProduct = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
        reset(data);
      } catch (error) {}
    };
    getProduct();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    const fakeValue = {
      id: id,
      ...data,
    };
    // console.log(fakeValue);
    props.onEdit(fakeValue);
    history.push("/admin/product");
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Sửa sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            defaultValue={product.name}
            // name="name"
            {...register("name", { required: true })}
            // onChange={onHandleChange}
          />
          {errors.name && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            type="number"
            className="form-control"
            defaultValue={product.price}
            // name="price"
            // onChange={onHandleChange}
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Tình trạng</label>
          <select
            className="form-control"
            defaultValue={product.status}
            // name="status"
            // onChange={onHandleChange}
            {...register("status")}
          >
            <option value=""></option>
            <option value={0}>Hết hàng</option>
            <option value={1}>Còn hàng</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Sửa sản phẩm
        </button>
      </form>
    </div>
  );
};
export default EditFormProduct;
