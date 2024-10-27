document.addEventListener('DOMContentLoaded', (event) => {

    // メモ追加ボタン
    const addButton = document.getElementById('addButton');

    // メモリスト追加範囲
    const memoList = document.getElementById('memoList');

    // メモ追加ボタンを押す
    addButton.addEventListener('click', () => {

        // メモリスト追加範囲がない場合はなにもしない。
        if (memoList === '') {
            return;
        }

        // メモリストの箱
        const listItem = document.createElement('section');
        const listdiv = document.createElement('div');

        // divにクラスを追加する
        listdiv.classList.add('memo_header');

        const list_item_h2 = document.createElement('h2');

        // const list_item_input_text = document.createElement('input');

        const list_div_flex = document.createElement('div');

        // divにクラスを追加する
        list_div_flex.classList.add('flex');

        const list_a_edit = document.createElement('a');

        const list_a_edit_img = document.createElement('img');

        list_a_edit_img.src = "../img/edit_icon.png";
        list_a_edit_img.alt = "編集";

        const list_a_delete = document.createElement('a');
        const list_a_delete_img = document.createElement('img');

        list_a_delete_img.src = "../img/rubbish_bin_icon.png";
        list_a_delete_img.alt = "削除";

        const listtextarea = document.createElement('textarea');

        list_a_edit.addEventListener('click', () => {
            if (listtextarea.readOnly == "") {
                listtextarea.readOnly = "readonly";
                listtextarea.style.backgroundColor = "#6E75A4";
                listtextarea.style.color = "#FFFFFF";
            } else {
                listtextarea.readOnly = "";
                listtextarea.style.backgroundColor = "#FFFFFF";
                listtextarea.style.color = "#000000";
            }
        });

        list_a_delete.addEventListener('click', () => {
            listItem.remove();
        });

        list_a_edit.appendChild(list_a_edit_img);
        list_a_delete.appendChild(list_a_delete_img);

        list_div_flex.appendChild(list_a_edit);
        list_div_flex.appendChild(list_a_delete);

        listdiv.appendChild(list_item_h2);
        // listdiv.appendChild(list_item_input_text);
        listdiv.appendChild(list_div_flex);

        listItem.appendChild(listdiv);
        listItem.appendChild(listtextarea);

        memoList.appendChild(listItem);
    });

    // <section>
    //     <div class="memo_header">
    //         <h2>1</h2>
    //         <div class="flex">
    //             <a class="edit"><img src="img/edit_icon.png" alt="編集"></a>
    //             <a class="delete"><img src="img/rubbish_bin_icon.png" alt="削除"></a>
    //         </div>
    //     </div>
    //     <textarea name="" id="" readonly></textarea>
    // </section>
});