import React, { useState, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

export default function BasicDataTable({value}) {
    let emptyTableValue = {
        id: '',
        name: '',
        href: '',
        description: '',
        version: '',
        baseType: '',
        reffredType: '',
        schemaLocation: '',
        type: ''
    };

    const [tableValues, setTableValues] = useState(value);
    const [tableValue, setTableValue] = useState(emptyTableValue);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef(null);

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const saveProduct = () => {
        setSubmitted(true);

        if (tableValue.name.trim()) {
            let _dataTableValues = [...tableValues];
            let _dataTableValue = { ...tableValue };

            if (tableValue.id) {
                const index = findIndexById(tableValue.id);

                _dataTableValues[index] = _dataTableValue;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                _dataTableValue.id = createId();
                _dataTableValue.image = 'product-placeholder.svg';
                _dataTableValues.push(_dataTableValue);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setTableValues(_dataTableValues);
            setProductDialog(false);
            setTableValue(emptyTableValue);
        }
    };

    const deleteProduct = () => {
        let _dataTableValues = tableValues.filter((val) => val.id !== tableValue.id);

        setTableValues(_dataTableValues);
        setDeleteProductDialog(false);
        setTableValue(emptyTableValue);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < tableValues.length; i++) {
            if (tableValues[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };


    const deleteSelectedProducts = () => {
        let _dataTableValues = tableValues.filter((val) => !selectedProducts.includes(val));

        setTableValues(_dataTableValues);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _dataTableValue = { ...tableValue };

        _dataTableValue[`${name}`] = val;

        setTableValue(_dataTableValue);
    };

    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );
    
    return (
        <div>
            <Toast ref={toast} />
            <Dialog visible={productDialog} style={{ width: '48rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal blockScroll className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>                  
              <div className="p-fluid">
                  <div className="field">
                      <label>ID</label>
                      <InputText type="text" value={tableValue.id} onChange={(e) => onInputChange(e, 'id')} />
                  </div>
                  <div className="field">
                    <label>Name</label>
                    <InputText type="text" value={tableValue.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !tableValue.name })} />
                    {submitted && !tableValue.name && <small className="p-error">Name is required.</small>}
                  </div>
                  <div className="field">
                      <label>Href</label>
                      <InputText type="text" value={tableValue.href} onChange={(e) => onInputChange(e, 'href')} />
                  </div>
                  <div className="field">
                    <label>Version</label>
                    <InputText type="text" value={tableValue.version} onChange={(e) => onInputChange(e, 'version')} />
                  </div>
                  <div className="field">
                    <label>Description</label>
                    <InputTextarea autoResize value={tableValue.description} onChange={(e) => onInputChange(e, 'description')} required />
                  </div>
                  <div className="field">
                     <label>@baseType</label>
                    <InputText type="text" value={tableValue.baseType} onChange={(e) => onInputChange(e, 'baseType')} />
                  </div>
                  <div className="field">
                    <label>@reffredType</label>
                    <InputText type="text" value={tableValue.reffredType} onChange={(e) => onInputChange(e, 'reffredType')} />
                  </div>
                  <div className="field">
                    <label>@schemaLocation</label>
                    <InputText type="text" value={tableValue.schemaLocation} onChange={(e) => onInputChange(e, 'schemaLocation')} />
                  </div>
                  <div className="field">
                    <label>@type</label>
                    <InputText type="text" value={tableValue.type} onChange={(e) => onInputChange(e, 'type')} />
                  </div>
              </div>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '48rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {tableValue && (
                        <span>
                            Are you sure you want to delete <b>{tableValue.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '48rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {tableValue && <span>Are you sure you want to delete the selected Data?</span>}
                </div>
            </Dialog>
        </div>
    );
}