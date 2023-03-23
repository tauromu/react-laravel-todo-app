<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ToDo extends Model
{
    use HasFactory;

    public function toDoDetails()
    {
        return $this->hasMany(ToDoDetail::class);
    }

    // 紐づくToDoDetailも一緒に削除するためにdeleteメソッドをオーバーライド
    public function delete()
    {
        $this->toDoDetails()->delete();
        parent::delete();
    }
}
