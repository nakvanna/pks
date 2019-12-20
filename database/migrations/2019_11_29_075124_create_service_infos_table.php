<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('year');
            $table->bigInteger('student_id');
            $table->bigInteger('service_id');
            $table->date('date_pay')->nullable();
            $table->date('last_date_pay');
            $table->integer('last_term')->default(0);
            $table->boolean('is_used')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_infos');
    }
}
